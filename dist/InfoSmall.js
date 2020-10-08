
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
            children.concat([_c('path',{attrs:{"d":"M7 .778A6.222 6.222 0 1013.222 7 6.222 6.222 0 007 .778zM6.883 2.45a1.057 1.057 0 011.113.998q.003.05.001.1a1.036 1.036 0 01-1.114 1.114A1.052 1.052 0 015.77 3.547 1.057 1.057 0 016.784 2.45q.05-.002.1.001zm1.673 8.05a.389.389 0 01-.39.389H5.834a.389.389 0 01-.389-.389v-.778a.389.389 0 01.39-.389h.388V7h-.389a.389.389 0 01-.389-.389v-.778a.389.389 0 01.39-.389h1.555a.389.389 0 01.389.39v3.5h.389a.389.389 0 01.389.388z"}})])
          )
        }
      }
    