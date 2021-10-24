package com.example

import io.ktor.features.*
import io.ktor.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.example.plugins.*

fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        install(CORS){
            host("localhost:3000")
        }
        configureRouting()
        configureSerialization()
    }.start(wait = true)
}
