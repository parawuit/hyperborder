module.exports.decorateConfig = (config) => {
  var configObj = Object.assign({
    borderWidth: '4px',
    borderColors: ['#fc1da7', '#fba506']
  }, config.hyperBorder);
  var colors = configObj.borderColors.join(',');
  var borderWidth = configObj.borderWidth;
  return Object.assign({}, config, {
    css: `
      html {
        height: 100%;
        background: linear-gradient(269deg, #ff00c8, #ffe300, #00ff20, #1c00ff);
        background-size: 800% 800%;

        -webkit-animation: AnimationName 16s ease infinite;
        -moz-animation: AnimationName 16s ease infinite;
        animation: AnimationName 16s ease infinite;
        border-radius: ${borderWidth};
      }
      @-webkit-keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @-moz-keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      body {
        position: absolute;
        top: ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
        border-radius: ${borderWidth};
      }
      ${config.css || ''}
      #mount {
      }
      .hyperterm_main {
        top: ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
        border-width: 0px;
      }
      .hyperterm_main .header_header {
        top: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
      }
      .hyperterm_main .tabs_list {
        border-bottom-color: ${config.borderColor};
        border-top-left-radius: ${borderWidth};
        border-top-right-radius: ${borderWidth};
      }
      .hyperterm_main .tab_tab:last-child {
        border-top-right-radius: ${borderWidth}
      }
      .hyperterm_main .terms_terms {
        border-radius: 0 0 ${borderWidth} ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
      }
      .hyperterm_main .terms_term {
        margin-top: ${borderWidth};
      }
    `
  });
}
