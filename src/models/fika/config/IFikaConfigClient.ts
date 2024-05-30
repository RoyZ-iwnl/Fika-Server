export interface IFikaConfigClient {
    useBtr: boolean;
    friendlyFire: boolean;
    dynamicVExfils: boolean;
    allowFreeCam: boolean;
    allowItemSending: boolean;
    forceSaveOnDeath: boolean;
    mods: {
        required: string[];
        optional: string[];
    };
}
