#!/usr/bin/env python3
"""Basit bir komut satırı hesap makinesi."""

from __future__ import annotations

import argparse
import ast
import operator


BINARY_OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
    ast.FloorDiv: operator.floordiv,
}

UNARY_OPERATORS = {
    ast.UAdd: operator.pos,
    ast.USub: operator.neg,
}


class ExpressionError(ValueError):
    """İfade geçersiz olduğunda yükseltilir."""


def evaluate_expression(expression: str) -> float:
    """Aritmetik ifadeyi güvenli biçimde değerlendirir."""
    try:
        parsed = ast.parse(expression, mode="eval")
    except SyntaxError as exc:
        raise ExpressionError("Geçersiz ifade sözdizimi.") from exc

    return _evaluate_node(parsed.body)


def _evaluate_node(node: ast.AST) -> float:
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
        return float(node.value)

    if isinstance(node, ast.BinOp):
        operator_fn = BINARY_OPERATORS.get(type(node.op))
        if operator_fn is None:
            raise ExpressionError("Bu işlem desteklenmiyor.")
        left = _evaluate_node(node.left)
        right = _evaluate_node(node.right)
        try:
            return float(operator_fn(left, right))
        except ZeroDivisionError as exc:
            raise ExpressionError("Sıfıra bölme hatası.") from exc

    if isinstance(node, ast.UnaryOp):
        operator_fn = UNARY_OPERATORS.get(type(node.op))
        if operator_fn is None:
            raise ExpressionError("Bu tekli işlem desteklenmiyor.")
        return float(operator_fn(_evaluate_node(node.operand)))

    raise ExpressionError("Yalnızca sayılar ve temel aritmetik işlemler kullanılabilir.")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Aritmetik ifadeleri çözen basit hesap makinesi"
    )
    parser.add_argument(
        "expression",
        nargs="?",
        help='Örnek: "(2 + 3) * 4 / 5"',
    )
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if not args.expression:
        parser.print_help()
        return 0

    try:
        result = evaluate_expression(args.expression)
    except ExpressionError as exc:
        print(f"Hata: {exc}")
        return 1

    if result.is_integer():
        print(int(result))
    else:
        print(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
