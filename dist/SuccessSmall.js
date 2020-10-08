
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"14","width":"14"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7 .778A6.222 6.222 0 1013.222 7 6.222 6.222 0 007 .778zm4.148 3.53l-4.919 6.324a.467.467 0 01-.34.18h-.028a.467.467 0 01-.331-.138L2.502 7.641a.467.467 0 010-.66l.516-.516a.467.467 0 01.66 0l2.078 2.084 4.088-5.254a.467.467 0 01.655-.078l.566.44a.467.467 0 01.083.652z"}})])
          )
        }
      }
    