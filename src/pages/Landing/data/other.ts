import { colors } from "../../../theme";

export const headingSectionChainHeading: { data: HeadingsFuctoryProps; id: number } =
{
  id: 1,
  data: {
    type: 'chain',
    text: [
      'title achive 1',
      'title achive 2',
      'title achive 3',
      'title achive 4',
      'title achive 5',
    ],
    color: colors.BrownAcent,
  },
}

export const gallarySectionChainHeading: {
  chain: HeadingsFuctoryProps
  large: HeadingsFuctoryProps
  id: number
} = {
  id: 1,
  chain: {
    type: 'chain',
    text: [
      'Lorem ipsum dolor sit',
      'amet consectetur adipisicing elit',
      'Consectetur sapiente',
      'quae qui fuga',
    ],
    color: colors.BrownAcent,
    size: 'md',
  },
  large: {
    type: 'large',
    size: '2xl',
    text: ['Lorem ipsum dolor sit amet consectetur adipisicing elit'],
    color: colors.bgDark,
  },
}