package components

import themes.ColorPalette
import themes.Profile
import androidx.compose.runtime.Composable
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.*

@Composable
fun Intro() {
    Div(
        attrs = {
            style {
                position(Position.Absolute)
                marginTop(30.px)
                width(60.percent)
                left(20.percent)
            }
        }
    ) {
        Div(
            attrs = {
                style {
                    backgroundColor(ColorPalette.primary)
                    position(Position.Relative)
                    display(DisplayStyle.Flex)
                    flexDirection(FlexDirection.Column)
                    padding(5.px)
                }
            }
        ) {
            // Header
            Div(
                attrs = {
                    style {
                        padding(20.px)
                    }
                }
            ) {
                // Profile Image
                Img(Profile.image, attrs = {
                    style {
                        borderRadius(50.percent, 50.percent)
                        backgroundColor(ColorPalette.background)
                        width(100.px)
                        height(100.px)
                        property("float", "right")
                    }
                })
                // Title
                Div(attrs = {
                    style {
                        color(ColorPalette.title)
                        fontSize(30.px)
                    }
                }) {
                    Text(Profile.name.uppercase())
                }
                // Subtitle
                Div(attrs = {
                    style {
                        color(ColorPalette.subtitle)
                        fontSize(16.px)
                    }
                }) {
                    Text(Profile.summary.uppercase())
                }
                // Social Media Links
                Div(
                    attrs = {
                        style {
                            marginTop(10.px)
                            display(DisplayStyle.Flex)
                        }
                    }
                ) {
                    Profile.social.forEach { (social, url) ->
                        Social(social,url)
                    }
                }
            }
            // Body
            Div(
                attrs = {
                    style {
                        backgroundColor(ColorPalette.surface)
                        color(ColorPalette.onSurface)
                        padding(20.px)
                        letterSpacing(2.px)
                    }
                }
            ) {
                Profile.skills.forEach { str ->
                    Div(
                        attrs = {
                            style {
                                property("margin", "5px")
                            }
                        }
                    ) { Text(":: ${str.uppercase()}") }
                }
            }
        }
    }
}