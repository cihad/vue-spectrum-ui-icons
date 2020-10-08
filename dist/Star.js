
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
            children.concat([_c('path',{attrs:{"d":"M9.241.3l2.161 5.715 6.106.289a.255.255 0 01.147.454l-4.77 3.823 1.612 5.9a.255.255 0 01-.386.28L9.002 13.4l-5.11 3.358a.255.255 0 01-.386-.28l1.612-5.9-4.77-3.821A.255.255 0 01.495 6.3l6.107-.285L8.763.3a.255.255 0 01.478 0z"}})])
          )
        }
      }
    