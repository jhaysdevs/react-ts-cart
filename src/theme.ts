// Theme manager class
type Theme = 'light' | 'dark'

class ThemeManager {
  private static instance: ThemeManager
  private currentTheme: Theme

  private constructor() {
    this.currentTheme = this.detectTheme()
    this.applyTheme(this.currentTheme)
  }

  static getInstance(): ThemeManager {
    return ThemeManager.instance || (ThemeManager.instance = new ThemeManager())
  }

  private detectTheme(): Theme {
    const saved = localStorage.getItem('theme')
    return (
      (saved as Theme) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    )
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-bs-theme', theme)
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
    this.currentTheme = theme
  }

  getCurrentTheme(): Theme {
    return this.currentTheme
  }

  toggleTheme(): void {
    this.applyTheme(this.currentTheme === 'dark' ? 'light' : 'dark')
  }
}

// Auto-initialize
ThemeManager.getInstance()

// Export for React components
export const theme = () => ThemeManager.getInstance().getCurrentTheme()
export const toggleTheme = (isDark: boolean, setIsDark: (dark: boolean) => void) => {
  ThemeManager.getInstance().toggleTheme()
  setIsDark(ThemeManager.getInstance().getCurrentTheme() === 'dark')
}
