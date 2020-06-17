import json

from django.http import HttpResponse


class BizService:
    @staticmethod
    def get_select_code(queryset):
        results = [
            {
                'id': code.name,
                'text': code.title,
            } for code in queryset
        ]

        content = {
            "results": results,
            "pagination": {
                "more": False
            }
        }
        return content


