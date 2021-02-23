package br.unicesumar.esoft7s2021.back.hello;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Deprecated
@RestController
@RequestMapping("/api/hello")
public class HelloController {
    
    @GetMapping
    public String get(){
        return "Hello: " + new Date().toLocaleString();
    }
}
