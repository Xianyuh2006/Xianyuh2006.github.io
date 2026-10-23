const giscus = `
<section id="comments">
  <div class="giscus"></div>
</section>
<script>
  (() => {
    const comments = document.getElementById('comments');
    const main = document.querySelector('.main-inner.post')
      || document.getElementById('main')
      || document.querySelector('main');

    if (!comments || !main) return;

    main.appendChild(comments);

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'Xianyuh2006/Xianyuh2006.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOVUYm2Q');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOVUYm2c4DJbxy');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'zh-CN');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    comments.querySelector('.giscus').appendChild(script);
  })();
</script>
`;

hexo.extend.injector.register('body_end', giscus, 'post');
