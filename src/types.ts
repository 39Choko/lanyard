export interface ClientOptions {
  userAgent?: string;
}

export interface ErrorResponse {
  error: {
    code: string;
    message: string;
  };
  success: false;
}

export interface SuccessResponse<T> {
  data: T;
  success: true;
}

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface RootData {
  info: string;
  monitored_user_count: number;
  discord_invite: string;
}

export interface UserData {
  kv: {
    [key: string]: string;
  };
  discord_user: {
    avatar: string | null;
    avatar_decoration: AvatarDecoration | null;
    bot: boolean;
    collectibles: Collectibles | null;
    discriminator: string;
    display_name: string;
    display_name_styles: DisplayNameStyles | null;
    global_name: string;
    id: string;
    primary_guild: PrimaryGuild | null;
    public_flags: number;
    username: string;
  };
  activities: Activity[] | [];
  discord_status: "online" | "idle" | "dnd" | "offline";
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_embedded: boolean;
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
}

export interface AvatarDecoration {
  asset: string;
  expire_at: number | null;
  sku_id: string;
}

export interface Collectibles {
  nameplate: {
    asset: string;
    expire_at: number | null;
    label: string;
    palette: string;
    sku_id: string;
  };
}

export interface DisplayNameStyles {
  color: number[];
  effect_id: number;
  font_id: number;
}

export interface PrimaryGuild {
  badge: string;
  identity_enabled: boolean;
  identity_guild_id: string;
  tag: string;
}

export interface Activity {
  application_id?: string;
  asserts?: Partial<
    Record<"large_image" | "large_text" | "large_url" | "small_image" | "small_text" | "small_url", string>
  >;
  buttons?: string[] | GatewayActivityButton[];
  created_at: number;
  details?: null | string;
  details_url?: null | string;
  flags?: number;
  id: string;
  instance?: boolean;
  name: string;
  party?: {
    id?: string;
    size?: [current_size: number, max_size: number];
  };
  platform?: string;
  secrets?: Partial<Record<"join" | "match" | "spectate", string>>;
  session_id?: string;
  state?: null | string;
  status_display_type?: null | number;
  sync_id?: string;
  timestamps?: {
    end?: number;
    start?: number;
  };
  type: number;
  url: null | string;
}

export interface GatewayActivityButton {
  id: string;
  url: string;
}

export interface SpotifyData {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
}
