package components
import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.A
import org.jetbrains.compose.web.dom.I
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import themes.ColorPalette

@Composable
fun Social(social: String, url: String) {
    A(href = url,
        attrs = {
            style {
                property("text-decoration", "none")
            }
        }
    ) {
        Div(attrs = {
            style {
                borderRadius(50.percent, 50.percent)
                backgroundColor(ColorPalette.background)
                color(ColorPalette.onBackground)
                width(40.px)
                height(40.px)
                margin(4.px)
                fontSize(20.px)
                display(DisplayStyle.Flex)
                justifyContent(JustifyContent.Center)
                alignItems(AlignItems.Center)
            }
        }) {
            I(attrs = {
                classes("fa-brands", "fa-$social")
            })
        }
    }
}
