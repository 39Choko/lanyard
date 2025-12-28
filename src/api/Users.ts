import { Client } from "../client/Client";
import { APIResponse, ErrorResponse, SuccessResponse, UserData } from "../types";

export class Users {
  constructor(private client: Client) {}

  public async getUser(userId: string): Promise<APIResponse<UserData>> {
    const request = await this.client.request<UserData>(`users/${userId}`);

    if (request.success === false) {
      return request as ErrorResponse;
    }

    return request as SuccessResponse<UserData>;
  }

  public async getDisplayName(userId: string): Promise<string | null> {
    const userRequest = await this.getUser(userId);

    if (userRequest.success === false) {
      return null;
    }

    return userRequest.data.discord_user.display_name;
  }

  public getAvatarURL(userId: string): string {
    return `https://api.lanyard.rest/${userId}.png`;
  }

  public async getPlatformStatus(userId: string): Promise<string[] | null> {
    const userRequest = await this.getUser(userId);
    const platform = [];

    if (userRequest.success === false) {
      return null;
    }

    const data = userRequest.data;

    if (data.active_on_discord_desktop) platform.push("desktop");
    if (data.active_on_discord_mobile) platform.push("mobile");
    if (data.active_on_discord_web) platform.push("web");
    if (data.active_on_discord_embedded) platform.push("embedded");

    return platform;
  }
}
