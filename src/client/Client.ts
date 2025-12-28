import { Users } from "../api/Users";
import { APIResponse, ClientOptions, ErrorResponse } from "../types";

export class Client {
  private readonly baseURL = "https://api.lanyard.rest/v1";
  private readonly userAgent: string | undefined;

  public readonly users: Users;

  constructor(options?: ClientOptions) {
    if (options?.userAgent) this.userAgent = options.userAgent;

    this.users = new Users(this);
  }

  public async request<T>(endpoint?: string) {
    const headers: Record<string, string> = {};
    if (this.userAgent) {
      headers["User-Agent"] = this.userAgent;
    }

    const finalEndpoint = endpoint ?? "";

    const result = await fetch(`${this.baseURL}/${finalEndpoint}`, {
      headers,
    });

    if (!result.ok) {
      const json = await result.json();

      return json as ErrorResponse;
    }

    const json = await result.json();
    return json as APIResponse<T>;
  }

  public getUserAgent(): string | undefined {
    return this.userAgent;
  }
}
