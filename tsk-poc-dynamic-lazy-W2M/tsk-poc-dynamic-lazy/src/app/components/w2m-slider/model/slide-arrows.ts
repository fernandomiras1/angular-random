export interface SlideArrow {
    icon?: string;
    label?: string;
}
export interface SlideArrows {
    position?: 'bottom'|'center'|'top';
    left: SlideArrow;
    right: SlideArrow;
}
