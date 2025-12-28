# @39choko/lanyard

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/@39choko/lanyard"><img src="https://img.shields.io/npm/v/@39choko/lanyard.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@39choko/lanyard"><img src="https://img.shields.io/npm/dt/@39choko/lanyard.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/39Choko/lanyard/commits/main/"><img alt="Last commit." src="https://img.shields.io/github/last-commit/39Choko/lanyard?logo=github&logoColor=ffffff">
	</p>
</div>

## About

@39choko/lanyard is a [npm](https://www.npmjs.com/) package that allows you to interacting with [Lanyard](https://github.com/Phineas/lanyard).

## Installation

```sh
npm install @39choko/lanyard
yarn add @39choko/lanyard
pnpm add @39choko/lanyard
bun add @39choko/lanyard
deno install npm:@39choko/lanyard
```

## Example usage

```ts
import { Client } from '@39choko/lanyard';

const client = new Client();
```

### Example

Getting User Info

```ts
const user = await client.user.getUser("826467976484094023");
if (!user.success) return throw Error("Failed to fetch user.")

console.log(user.data);
```

Getting User display name

```ts
const avatarURL = await client.user.getAvatarURL("826467976484094023");
if (!avatarURL) return throw Error("Failed to fetch the avatar url.")

console.log(avatarURL); // "https://cdn.discordapp.com/avatars/826467976484094023/e4479e082bb156a6f004fb3b34d678ac.png"
```

Getting User platform status

```ts
const platformStatus = await client.user.getPlatformStatus("826467976484094023");
if (!platformStatus) return throw Error("Failed to fetch the platform status.")

console.log(platformStatus); // ["desktop", "mobile"]
```

## Links

- [npm](https://www.npmjs.com/package/@39choko/lanyard)
- [Lanyard](https://github.com/Phineas/lanyard)

## More

If you want to contribute to this repo please make a pull request or dm me on discord (39choko / 826467976484094023)
