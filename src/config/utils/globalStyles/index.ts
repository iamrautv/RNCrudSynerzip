/**
 * @fileoverview App generic styles or styles
 * helper functions
 * @package
 */
import colors from '../colors';
import * as T from './types';

const globalStyles = {
  defaultText: {
    color: colors.text,
    fontSize: 9
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  flex: (num: number): T.Flex => ({ flex: num }),

  mg: (px: number): T.Margin => ({ margin: px }),
  mgL: (px: number): T.MarginLeft => ({ marginLeft: px }),
  mgR: (px: number): T.MarginRight => ({ marginRight: px }),
  mgT: (px: number): T.MarginTop => ({ marginTop: px }),
  mgB: (px: number): T.MarginBottom => ({ marginBottom: px }),
  mgV: (px: number): T.MarginVertical => ({ marginVertical: px }),
  mgH: (px: number): T.MarginHorizontal => ({ marginHorizontal: px }),

  pad: (px: number): T.Padding => ({ padding: px }),
  padL: (px: number): T.PaddingLeft => ({ paddingLeft: px }),
  padR: (px: number): T.PaddingRight => ({ paddingRight: px }),
  padT: (px: number): T.PaddingTop => ({ paddingTop: px }),
  padB: (px: number): T.PaddingBottom => ({ paddingBottom: px }),
  padV: (px: number): T.PaddingVertical => ({ paddingVertical: px }),
  padH: (px: number): T.PaddingHorizontal => ({ paddingHorizontal: px }),
  w: (px: number): T.Width => ({ width: px }),
  h: (px: number): T.Height => ({ height: px }),
  lH: (px: number): T.LineHeight => ({ lineHeight: px }),

  h1: { fontSize: 30 },
  h2: { fontSize: 22 },
  h3: { fontSize: 17 },
  h4: { fontSize: 15 },
  h5: { fontSize: 12 },
  h6: { fontSize: 10 },
};

export default globalStyles;
