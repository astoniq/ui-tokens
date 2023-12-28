import { darkTheme as vkBaseDark, lightTheme as vkBase } from './base/vk';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';

export const themes = [
    vkBase,
    vkBaseDark,
    vkIOSTheme,
    vkIOSThemeDark
] as const;