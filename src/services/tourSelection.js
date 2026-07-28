// Shared channel for "user picked this tour" so the tour cards and the booking
// form stay decoupled. The booking form owns tourType in React state, so the
// selection has to be handed over as an event it can respond to — writing to
// the <select> element's value directly is reverted on the next render.
export const SELECT_TOUR_EVENT = 'artours:select-tour';
