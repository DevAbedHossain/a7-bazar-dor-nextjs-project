
export const translateUnit = (unit: string): string => {
    const units: Record<string, string> = {
        kg: "কেজি",
        kilogram: "কেজি",
        gram: "গ্রাম",
        g: "গ্রাম",
        liter: "লিটার",
        litre: "লিটার",
        ml: "মিলিলিটার",
        piece: "টি",
        pieces: "টি",
        pcs: "টি",
        dozen: "ডজন",
        packet: "প্যাকেট",
        bottle: "বোতল",
        bag: "বস্তা",
        maund: "মণ",
        pound: "পাউন্ড",
    };

    return units[unit.toLowerCase()] ?? unit;
};