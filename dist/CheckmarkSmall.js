
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"10"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.788 9A.999.999 0 013 8.615l-2.288-3a1 1 0 111.576-1.23l1.5 1.991 3.924-4.991a1 1 0 111.576 1.23l-4.712 6A.999.999 0 013.788 9z"}})])
          )
        }
      }
    