import { describe, expect, test, mock, beforeAll } from "bun:test";
import { Client } from "../src/client/Client";

const mockUserId = "826467976484094023";
const mockUserData = {
  kv: {},
  discord_user: {
    id: mockUserId,
    username: "39choko",
    avatar: "e4479e082bb156a6f004fb3b34d678ac",
    discriminator: "0",
    bot: false,
    global_name: "Choko",
    display_name: "Choko",
    public_flags: 0,
    avatar_decoration_data: null,
  },
  discord_status: "online",
  active_on_discord_web: false,
  active_on_discord_desktop: true,
  active_on_discord_mobile: true,
  listening_to_spotify: false,
  spotify: null,
  activities: [],
};

const mockSuccessResponse = {
  success: true,
  data: mockUserData,
};

const mockErrorResponse = {
  success: false,
  error: {
    message: "User is not being monitored by Lanyard",
    code: "user_not_monitored",
  },
};

describe("Users API", () => {
  let client: Client;

  beforeAll(() => {
    client = new Client();
  });

  test("getUser returns user data on success", async () => {
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockSuccessResponse)))) as any;

    const response = await client.users.getUser(mockUserId);
    expect(response.success).toBe(true);
    if (response.success) {
      expect(response.data.discord_user.id).toBe(mockUserId);
    }
  });

  test("getDisplayName returns display name", async () => {
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockSuccessResponse)))) as any;

    const displayName = await client.users.getDisplayName(mockUserId);
    expect(displayName).toBe("Choko");
  });

  test("getAvatarURL returns correct URL", async () => {
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockSuccessResponse)))) as any;

    const avatarURL = client.users.getAvatarURL(mockUserId);
    expect(avatarURL).toBe(`https://api.lanyard.rest/${mockUserId}.png`);
  });

  test("getPlatformStatus returns correct status", async () => {
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockSuccessResponse)))) as any;

    const status = await client.users.getPlatformStatus(mockUserId);
    expect(status).toContain("desktop");
    expect(status).toContain("mobile");
    expect(status).not.toContain("web");
  });

  test("handle error response", async () => {
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockErrorResponse)))) as any;

    const response = await client.users.getUser("invalid_id");
    expect(response.success).toBe(false);
  });
});
