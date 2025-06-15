
import org.jetbrains.compose.web.renderComposable
import components.Banner
import components.Intro
import org.w3c.dom.HTMLLinkElement
import kotlinx.browser.document
import themes.GlobalStyles
import org.jetbrains.compose.web.css.Style

fun appendStylesheet(href: String) {
    val link = document.createElement("link") as HTMLLinkElement
    link.rel = "stylesheet"
    link.href = href
    document.head?.appendChild(link)
}


fun main() {
    appendStylesheet("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap")
    appendStylesheet("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css")


    renderComposable(rootElementId = "root") {
        Style(GlobalStyles)
        Banner()
        Intro()
    }
}

