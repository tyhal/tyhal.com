package components

import themes.ColorPalette
import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*

@Composable
fun Banner() {
    Div(attrs = {
        style {
            backgroundColor(ColorPalette.primary)
            display(DisplayStyle.Flex)
            flexDirection(FlexDirection.Column)
            height(80.px)
            width(100.vw)
            justifyContent(JustifyContent.Center)
            alignItems(AlignItems.Center)
        }
    }) {
        Span(attrs = {
            style {
                color(rgb(255, 255, 255))
                fontSize(24.px)
                width(100.vw)
            }
        }) {
            Span(attrs = {
                style {
                    color(ColorPalette.onPrimary)
                    fontSize(30.px)
                    marginLeft(2.percent)
                }
            }) {
                Text("TYHA\\.")
            }
        }
    }
}