function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{e as r,q as t,_ as a}from"./q-C1g6vH8z.js";const e=250,s=r(t(()=>a(()=>import("./q-CSQcmdBP.js").then(o=>o.a),__vite__mapDeps([])),"s_NNTW34OGQwc")),n=`
  .f1 { flex: 1; }
  .hh { width: 100%; height: .2rem; }
  .vv { width: .2rem; height: 100%; }

  .window {
    display: flex;
    background: #333a;
    border: 1px solid #6666;
    border-radius: .5rem;
    overflow: hidden;
    transition: transform ${e}ms,
                opacity ${e}ms;

    transform: scale(.9);
    opacity: 0;
    &.active {
      transform: scale(1);
      opacity: 1;
    }
  }

  .mid {
    display: flex;
    flex-direction: column;
  }

  .nav {
    display: flex;
    margin-bottom: .2rem;
    line-height: .9;
    font-size: .9em;
    user-select: none;
  }

  .btn {
    border: none;
    border-radius: .5em;
    background: transparent;
    color: white;

    &:hover {
      background: #fff4;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    border-radius: .3rem;
    overflow: auto;
  }
`;export{e as _auto_dur,n as _auto_styles,s as default};
