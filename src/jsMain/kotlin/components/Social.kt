package components
import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import themes.ColorPalette

@Composable
fun Social(social: String, url: String) {
    A(href = url) {
        Div(attrs = {
            style {
                borderRadius(50.percent, 50.percent)
                backgroundColor(ColorPalette.background)
                color(ColorPalette.onBackground)
                width(30.px)
                height(30.px)
                margin(2.px)
                fontSize(12.px)
                display(DisplayStyle.Flex)
                justifyContent(JustifyContent.Center)
                alignItems(AlignItems.Center)
            }
        }) {
            Div(
                attrs = {
                    style {
                        textAlign("center")
                    }
                }
            ) {
                Text(social.substring(0,3).uppercase()) // TODO use svg in resources
            }
        }
    }
}