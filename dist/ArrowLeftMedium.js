
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"10","width":"14"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12.99 4H3.414l2.283-2.283A1 1 0 104.283.303l-3.98 3.99a1 1 0 000 1.414l3.98 3.99a1 1 0 101.414-1.414L3.414 6h9.576a1 1 0 100-2z"}})])
          )
        }
      }
    