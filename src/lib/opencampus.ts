import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { Chain } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const opencampus = {
    id: 656476,
    name: "opencampus",
    rpcUrls: {
        public: { http: ["https://rpc.open-campus-codex.gelato.digital"] },
        default: { http: ["https://rpc.open-campus-codex.gelato.digital"] },
    },
    blockExplorers: {
        default: {
            name: "Open Campus Codex",
            url: "https://opencampus.gelatoscout.com",
            apiUrl: "https://opencampus.gelatoscout.com/api",
        },
    },
    nativeCurrency: {
        decimals: 18,
        name: "EDU",
        symbol: "EDU",
    },
    testnet: true,
} as const satisfies Chain;

// export function getConfig() {
//     return createConfig({
//         chains: [opencampus],
//         connectors: [
//             injected(),
//             // coinbaseWallet(),
//             // walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
//         ],
//         // storage: createStorage({
//         //   storage: cookieStorage,
//         // }),
//         // ssr: true,
//         transports: {
//             [opencampus.id]: http(),
//         },
//     });
// }


// declare module "wagmi" {
//     interface Register {
//         config: ReturnType<typeof getConfig>;
//     }
// }

// to use instead of proivder
// import { getConfig } from "../opencampus";

