import { ChoosenButtonOptions } from "../types/proposal";

const storageKey = 'proposalDecision'

type decisionLocalStorage = {
    decision: ChoosenButtonOptions
}

function setDecisionOnLocalStorage(choose: ChoosenButtonOptions) {
    localStorage.setItem(storageKey, JSON.stringify({ decision: choose }))
    return;
}

function getDecisionOnLocalStorage(): decisionLocalStorage | undefined {
    const decision = localStorage.getItem(storageKey)
    if (decision) {
        return JSON.parse(decision)
    }
    return
}


export { setDecisionOnLocalStorage, getDecisionOnLocalStorage }