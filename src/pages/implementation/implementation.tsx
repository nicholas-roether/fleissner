import { Box, Link, Typography } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React from "react";

const ImplementationPage = () => (
	<>
		<Box mt={10} />
		<Typography paragraph>
			Die Fleißnersche Schablone eignet sich nicht besonders für
			programmatische Implementierung. Es folgt eine funktionierende
			Implementierung in Java, aber ich finde nicht dass sie besonders
			hilfreich ist.
		</Typography>
		<Typography paragraph>
			Die Implementierung dieser Website finden sie auf Github unter {" "}
			<Link href="https://github.com/nicholas-roether/fleissner">https://github.com/nicholas-roether/fleissner</Link>.
		</Typography>
		<Box mt={5} />
		<SyntaxHighlighter language="java" style={atomDark}>
{`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Fleissner {
    private static final List<Integer> baseIndecies = List.of(1, 3, 5, 10, 14, 19, 22, 29, 33);

    private static List<Integer> rotateIndecies(List<Integer> indecies) {
        return indecies.stream().map((Integer i) -> 6 * ((i % 6) + 1) - (i / 6) - 1).sorted().collect(Collectors.toList());
    }

    private static List<Integer> getFleissnerIndecies(int rotations) {
        List<Integer> result = baseIndecies;
        rotations = rotations % 4;
        while(rotations > 0) {
            result = rotateIndecies(result);
            rotations--;
        }
        return result;
    }

    public static String decode(List<Character> chars) {
        StringBuilder result = new StringBuilder();
        List<Integer> indecies = baseIndecies;
        for(int i = 0; i < 4; i++) {
            if(i != 0) indecies = rotateIndecies(indecies);
            String part = indecies.stream().map((Integer index) -> chars.get(index).toString()).collect(Collectors.joining());
            result.append(part);
        }
        return result.toString();
    }

    public static List<Character> encode(String message) {
        message = message.substring(0, 36).replace(" ", "");
        List<Character> result = new ArrayList<>(Collections.nCopies(36, null));
        List<Integer> indecies = baseIndecies;
        for(int i = 0; i < 4; i++) {
            if(i != 0) indecies = rotateIndecies(indecies);
            System.out.println(indecies);
            for(int j = 0; j < 9; j++) {
                result.set(indecies.get(j), message.charAt(i * 9 + j));
            }
        }
        return result;
    }
}`}
		</SyntaxHighlighter>
	</>
);

export default ImplementationPage;