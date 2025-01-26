# The New Responsive
4 Cirkels:

1. User preference styles
   User-preference queries

3. Viewport & form-factor
   Viewport and form-factor media queries

4. Macro layouts
   Container styles, macro components that contain other components

5. Container styles
   Container queries, scoped styles, and component-specific styles

### Responsive to the user
- Instellingen van een gebruiker (bijvoorbeeld dark mode)
- Instellingen van contrast
- Instellingen van animatie

	Level 5 user preference media features:
	- prefers-reduced-motion
		- beter om standaard NIET animaties te doen, en dan de animaties in een media query te zetten die actief is als prefers reduced motion NIET aan staat
	- prefers-reduced-transparency
	- prefers-contrast
	- forced-colors
	- prefers-color-scheme
	- prefers-reduced-data
	
	- inverted-colors (color media features)