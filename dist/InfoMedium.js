
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
            children.concat([_c('path',{attrs:{"d":"M9 1a8 8 0 108 8 8 8 0 00-8-8zm-.15 2.15a1.359 1.359 0 011.431 1.283q.004.064.001.129A1.332 1.332 0 018.85 5.994a1.353 1.353 0 01-1.432-1.433 1.359 1.359 0 011.304-1.412q.064-.002.128.001zM11 13.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H8V9h-.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V12h.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    