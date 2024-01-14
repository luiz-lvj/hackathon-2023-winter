import {
  AddSquare,
  ArrowDown,
  ArrowUp,
  Back,
  CloseSquare,
  Discovery,
  Ecology,
  Environment,
  Heart,
  Housing,
  IconProps,
  Instagram,
  Linkedin,
  Logout,
  Password,
  Profile,
  RemoveSquare,
  Social,
  Swap,
  Tailsman,
  TwitterX,
  Users,
  Wallet,
  Youtube
} from './export-icons';

export type IconType = keyof typeof Icons;

// NOTE: when using tailwindcss use the stroke or fill  utility class to style the icon e.g (stroke-[your_color] or fill-[your_color])

export const Icons = {
  instagram: Instagram,
  linkedin: Linkedin,
  twitterX: TwitterX,
  youtube: Youtube,
  ecology: Ecology,
  environment: Environment,
  housing: Housing,
  social: Social,
  discovery: Discovery,
  heart: Heart,
  wallet: Wallet,
  password: Password,
  swap: Swap,
  users: Users,
  back: Back,
  profile: Profile,
  closeSquare: CloseSquare,
  removeSquare: RemoveSquare,
  addSquare: AddSquare,
  ArrowDown,
  ArrowUp,
  Tailsman,
  Logout,
  spin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
};
