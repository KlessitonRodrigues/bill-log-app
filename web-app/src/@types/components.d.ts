declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string | number;
    h?: string | number;
    maxw?: string;
    maxh?: string;
    p?: string | number;
    m?: string | number;
    mb?: string | number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    wrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean | "reverse-left";
    reverse?: boolean;
    half?: boolean;
    src?: string;
    hidden?: boolean;
    full?: boolean;
    fit?: boolean;
    between?: boolean;
  };

  type BoxField = {
    w?: string | number;
    h?: string | number;
    maxw?: string | number;
    maxh?: string | number;
    fit?: boolean;
    p?: string | number;
    m?: string | number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    center?: boolean;
    between?: boolean;
    wrap?: boolean;
    gap?: number;
    responsive?: boolean;
  };

  type CardField = {
    w?: string | number;
    h?: string | number;
    p?: string | number;
    m?: string | number;
    noRounded?: boolean;
  };

  type InputField = {
    name?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    input?: any;
  };

  type SelectionField = {
    name?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    input?: any;
    options?: { value: string; label: string }[];
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type TextField = {
    path?: string;
    size?: number;
    className?: string;
    tag?: Utils.TextTags;
    children?: React.ReactNode;
  };

  type Loading = {
    show: boolean;
    type: "fullScreen" | "icon" | "line";
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactNode;
  };

  type Accordion = {
    title: React.ReactElement;
    content: React.ReactElement;
    delayLoad?: boolean;
  };

  type LinkAndIcon = {
    url?: string;
    icon?: Utils.IconTypes;
    label?: string;
    path?: string;
  };

  type SignInFormProps = {
    goAccountForm?: () => void;
  };

  type SignUpFormProps = {
    goLoginForm?: () => void;
  };
}
