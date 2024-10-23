export enum OfferStatus {
    Pending = "Pending",
    Declined = "Declined",
    Accepted = "Accepted",
}

export interface Item {
    id: string;
    title: string;
    description: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
    offersMade: Offer[];
    offersReceived: Offer[];
    comments: Comment[];
    reactions: Reaction[];
}

export interface Offer {
    id: string;
    itemOfferedId: string;
    itemRequestedId: string;
    offeredById: string;
    requestedFromId: string;
    status: OfferStatus;
    createdAt: string;
    updatedAt: string;
    itemOffered: Item;
    itemRequested: Item;
}

export interface Comment {
    id: string;
    content: string;
    itemId?: string | null;
    userId: string;
    createdAt: string;
    item?: Item | null;
    reactions: Reaction[];
}

export interface Reaction {
    id: string;
    emoji: string;
    itemId?: string | null;
    commentId?: string | null;
    userId: string;
    createdAt: string;
    item?: Item | null;
    comment?: Comment | null;
}
