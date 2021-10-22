package com.example.models

import kotlinx.serialization.Serializable

/**
 * {
 *    "id": 1,
 *    "phrase": "Hello, World",
 * }
 */

@Serializable
data class Phrase(val id: Long, val phrase: String)

