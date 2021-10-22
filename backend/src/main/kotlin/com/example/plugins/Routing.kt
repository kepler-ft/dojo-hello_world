package com.example.plugins

import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.http.*
import io.ktor.features.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import com.example.models.Phrase

fun Application.configureRouting() {
    routing {
        get("/") {
                call.respond(Phrase(1, "Hello, Kepler"))
            }
    }
}
