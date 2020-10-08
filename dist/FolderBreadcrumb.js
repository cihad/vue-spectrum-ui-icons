
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"18","width":"18"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.5 4l-7.166.004-1.652-1.7A1 1 0 006.965 2H2a1 1 0 00-1 1v11.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zM2 3h4.965l1.943 2H2zm10.354 5.854l-3 3a.5.5 0 01-.707 0l-3-3a.5.5 0 01.707-.707L9 10.793l2.646-2.646a.5.5 0 01.707.707z"}})])
          )
        }
      }
    