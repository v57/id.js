declare module '@v57/id'
export function newId(size: number): string;
export function uniqueId(size: number, contains: (id: string) => any | null): Promise<string>;
