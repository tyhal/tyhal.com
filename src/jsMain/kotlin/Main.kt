import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import org.jetbrains.compose.web.renderComposable
import components.Banner
import org.w3c.dom.HTMLLinkElement
import kotlinx.browser.document
import themes.GlobalStyles
import org.jetbrains.compose.web.css.Style

fun main() {
    var count: Int by mutableStateOf(0)

    // TODO move out
    val link = document.createElement("link") as HTMLLinkElement
    link.rel = "stylesheet"
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
    document.head?.appendChild(link)

    renderComposable(rootElementId = "root") {
        Style(GlobalStyles)
        Banner()
    }
}

