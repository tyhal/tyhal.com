package themes

import org.jetbrains.compose.web.css.*

object GlobalStyles : StyleSheet() {
    init {
        "body" style {
            margin(0.px)
            padding(0.px)
            property("font-family", "'JetBrains Mono', monospace")
            property("background-color", ColorPalette.background)
        }
    }
}