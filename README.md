# Usermaven SDK Integration with Angular (Example)

This guide will walk you through integrating the Usermaven SDK with an Angular application.

## Step 1: Install Usermaven SDK
First, install the Usermaven module using npm with the command:

```bash
npm install @usermaven/sdk-js --save
```

## Step 2: Create client.ts
We'll create a helper function to generate a new instance of the Usermaven client when needed.

In the `src/app` directory, create a `client.ts` file.


```typescript
import { UsermavenClient, usermavenClient, UsermavenOptions } from "@usermaven/sdk-js";

function createClient(params: UsermavenOptions): UsermavenClient {
    return usermavenClient(params);
}

export default createClient
```

## Step 3: Integrate with Angular
To use the Usermaven SDK in an Angular component, import the helper function from client.ts and use it to create a new instance of the Usermaven client.

```typescript
import { OnInit } from '@angular/core';
import createClient from './client';

export class ExampleComponent implements OnInit {
  private client: any;

  constructor() { }

  ngOnInit(): void {
    const options: any = {
        // Your UsermavenOptions here...
        key: 'xxxxxxx',
        tracking_host: 'https://events.usermaven.com',
        autocapture: true,
    };
    
    this.client = createClient(options);
  }
}
```

Now you can use this.client to work with the UserMaven SDK in this component.

---

### Additional Notes
You may face TypeScript compiler errors when using the Usermaven SDK in an Angular project. To resolve these errors, you can add the following lines to your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "skipLibCheck": true,
    // other options...
  },
  // other config...
}
```