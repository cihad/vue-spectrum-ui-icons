
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"8","width":"8"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M7.77 6.71L5.06 4l2.71-2.71A.75.75 0 106.71.23L4 2.94 1.29.23A.75.75 0 10.23 1.29L2.94 4 .23 6.71a.75.75 0 101.06 1.06L4 5.06l2.71 2.71a.75.75 0 101.06-1.06z"}})])
          )
        }
      }
    