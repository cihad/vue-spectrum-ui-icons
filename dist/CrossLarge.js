
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"12","width":"12"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.697 10.283L7.414 6l4.283-4.283A1 1 0 1010.283.303L6 4.586 1.717.303A1 1 0 10.303 1.717L4.586 6 .303 10.283a1 1 0 101.414 1.414L6 7.414l4.283 4.283a1 1 0 101.414-1.414z"}})])
          )
        }
      }
    