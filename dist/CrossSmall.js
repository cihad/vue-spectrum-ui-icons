
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
            children.concat([_c('path',{attrs:{"d":"M7.317 6.433L4.884 4l2.433-2.433a.625.625 0 10-.884-.884L4 3.116 1.567.683a.625.625 0 10-.884.884L3.116 4 .683 6.433a.625.625 0 10.884.884L4 4.884l2.433 2.433a.625.625 0 00.884-.884z"}})])
          )
        }
      }
    