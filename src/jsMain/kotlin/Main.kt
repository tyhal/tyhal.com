
import org.jetbrains.compose.web.renderComposable
import components.Banner
import components.Intro
import org.w3c.dom.HTMLLinkElement
import kotlinx.browser.document
import themes.GlobalStyles
import org.jetbrains.compose.web.css.Style

fun main() {
    // TODO move out
    val link = document.createElement("link") as HTMLLinkElement
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
    document.head?.appendChild(link)

    renderComposable(rootElementId = "root") {
        Style(GlobalStyles)
        Banner()
        Intro()
    }
}

