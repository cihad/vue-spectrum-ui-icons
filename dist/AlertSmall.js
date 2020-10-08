
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
            children.concat([_c('path',{attrs:{"d":"M6.66 1.003L.157 12.643a.389.389 0 00.339.58h13.01a.389.389 0 00.34-.58L7.338 1.004a.389.389 0 00-.678 0zm1.118 10.47a.194.194 0 01-.195.194H6.417a.194.194 0 01-.195-.195v-1.166a.194.194 0 01.195-.195h1.166a.194.194 0 01.195.195zm0-2.334a.194.194 0 01-.195.194H6.417a.194.194 0 01-.195-.194V4.472a.194.194 0 01.195-.194h1.166a.194.194 0 01.195.194z"}})])
          )
        }
      }
    