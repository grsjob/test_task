import {TOGGLE_ACTIVE, POST_CHIP, DELETE_CHIP} from "../const/types";

export function postChip(chip) {
    return {
        type: POST_CHIP,
        payload: chip
    }

}export function deleteChip(chipName) {
    return {
        type: DELETE_CHIP,
        payload: chipName
    }
}export function toggleActive(chipName) {
    return {
        type: TOGGLE_ACTIVE,
        payload: chipName
    }
}