import kotlin.browser.document

fun main(args: Array<String>) {

    println("Welcome to Kevin's Work")

    val root =document.getElementById("root")
    root!!.innerHTML ="<h1>Hello</h1>"
}