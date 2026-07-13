/* ============================================================
   blog.js — powers the Writing list and single-article pages.
   Articles live as Markdown files in /articles.
   New articles are auto-discovered via the GitHub Contents API,
   so publishing = drop a new dated .md file into /articles.
   ============================================================ */
(function () {
  var BLOG = {
    owner: "NikosDevPhp",
    repo: "Nikos-Triantafyllou-Personal-Page",
    dir: "articles",
    // Branches to look on, first hit wins. Add/re-order if you
    // ever serve Pages from a different branch.
    refs: ["claude/personal-portfolio-page-z6yhq7", "main", "master", "gh-pages"],
  };

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function dateFromName(name) {
    var m = name.match(/(\d{4}-\d{2}-\d{2})/);
    return m ? m[1] : "";
  }

  function fmtDate(s) {
    if (!s) return "";
    var d = new Date(s);
    if (isNaN(d.getTime())) return s;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function titleFromName(name) {
    return name
      .replace(/\.md$/i, "")
      .replace(/^\d{4}-\d{2}-\d{2}-/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  function tagList(meta) {
    return (meta.tags || "")
      .split(",")
      .map(function (t) { return t.trim(); })
      .filter(Boolean);
  }

  // ---- discover article filenames across candidate branches ----
  function discover() {
    var refs = BLOG.refs.slice();
    function tryRef() {
      if (!refs.length) return Promise.resolve([]);
      var ref = refs.shift();
      var url =
        "https://api.github.com/repos/" +
        BLOG.owner + "/" + BLOG.repo +
        "/contents/" + BLOG.dir + "?ref=" + encodeURIComponent(ref);
      return fetch(url, { headers: { Accept: "application/vnd.github+json" } })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (Array.isArray(data)) {
            var files = data
              .filter(function (f) { return f.type === "file" && /\.md$/i.test(f.name); })
              .map(function (f) { return f.name; });
            if (files.length) return files;
          }
          return tryRef();
        })
        .catch(function () { return tryRef(); });
    }
    return tryRef();
  }

  function loadMeta(name) {
    return fetch(BLOG.dir + "/" + name, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (text) {
        var parsed = MD.parse(text);
        var meta = parsed.meta;
        var summary =
          meta.summary ||
          parsed.body.replace(/[#>*`_>\-]/g, "").trim().slice(0, 150) + "…";
        return {
          name: name,
          title: meta.title || titleFromName(name),
          date: meta.date || dateFromName(name),
          summary: summary,
          tags: tagList(meta),
        };
      })
      .catch(function () { return null; });
  }

  // ---- listing page ----
  function initList(el) {
    el.innerHTML = '<p class="blog__empty">Loading articles…</p>';
    discover().then(function (files) {
      if (!files.length) {
        el.innerHTML =
          '<p class="blog__empty">No articles found yet. Add a Markdown file to ' +
          "<code>/articles</code> (e.g. <code>2026-08-01-my-post.md</code>) and it will show up here.</p>";
        return;
      }
      Promise.all(files.map(loadMeta)).then(function (metas) {
        metas = metas.filter(Boolean).sort(function (a, b) {
          return (b.date || "").localeCompare(a.date || "");
        });
        el.innerHTML = metas
          .map(function (m) {
            return (
              '<a class="post" href="article.html?a=' + encodeURIComponent(m.name) + '">' +
                '<div class="post__meta"><time>' + esc(fmtDate(m.date)) + "</time>" +
                  m.tags.slice(0, 3).map(function (t) {
                    return '<span class="post__tag">' + esc(t) + "</span>";
                  }).join("") +
                "</div>" +
                '<h2 class="post__title">' + esc(m.title) + "</h2>" +
                '<p class="post__summary">' + esc(m.summary) + "</p>" +
                '<span class="post__more">Read the piece →</span>' +
              "</a>"
            );
          })
          .join("");
      });
    });
  }

  // ---- single article page ----
  function initArticle(el) {
    var a = new URLSearchParams(location.search).get("a") || "";
    if (!/^[\w.\-]+\.md$/.test(a)) {
      el.innerHTML = '<p class="blog__empty">Article not found. <a href="articles.html">Back to writing →</a></p>';
      return;
    }
    el.innerHTML = '<p class="blog__empty">Loading…</p>';
    fetch(BLOG.dir + "/" + a, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (text) {
        var parsed = MD.parse(text);
        var meta = parsed.meta;
        var title = meta.title || titleFromName(a);
        var words = parsed.body.trim().split(/\s+/).length;
        var mins = Math.max(1, Math.round(words / 200));
        document.title = title + " — Nikos Triantafyllou";
        // the header already shows the title, so drop a leading H1 in the body
        var bodyHtml = parsed.html.replace(/^\s*<h1>[\s\S]*?<\/h1>/, "");

        el.innerHTML =
          '<header class="prose__head">' +
            '<a class="prose__back" href="articles.html">← All writing</a>' +
            '<div class="post__meta"><time>' + esc(fmtDate(meta.date || dateFromName(a))) + "</time>" +
              '<span>' + mins + " min read</span>" +
              tagList(meta).map(function (t) {
                return '<span class="post__tag">' + esc(t) + "</span>";
              }).join("") +
            "</div>" +
            '<h1 class="prose__title">' + esc(title) + "</h1>" +
          "</header>" +
          '<article class="prose">' + bodyHtml + "</article>" +
          '<footer class="prose__foot"><a class="prose__back" href="articles.html">← Back to all writing</a></footer>';
      })
      .catch(function () {
        el.innerHTML = '<p class="blog__empty">Could not load this article. <a href="articles.html">Back to writing →</a></p>';
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var list = document.getElementById("postList");
    var art = document.getElementById("articleView");
    if (list) initList(list);
    if (art) initArticle(art);
  });
})();
